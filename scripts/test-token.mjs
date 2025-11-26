#!/usr/bin/env node

/**
 * Script para probar el token de GitHub antes de usarlo en el workflow
 * 
 * Uso:
 *   PORTFOLIO_DISPATCH_TOKEN=tu_token node scripts/test-token.mjs
 */

const TOKEN = process.env.PORTFOLIO_DISPATCH_TOKEN;
const REPO_OWNER = 'JBorrsad';
const REPO_NAME = 'portfolio';

if (!TOKEN) {
	console.error('❌ Error: PORTFOLIO_DISPATCH_TOKEN no está configurado');
	console.log('\nUso:');
	console.log('  PORTFOLIO_DISPATCH_TOKEN=tu_token node scripts/test-token.mjs');
	process.exit(1);
}

console.log('🔍 Verificando token de GitHub...\n');
console.log(`Token configurado: ${TOKEN.substring(0, 7)}...${TOKEN.substring(TOKEN.length - 4)}`);
console.log(`Repositorio objetivo: ${REPO_OWNER}/${REPO_NAME}\n`);

// Verificar formato del token
if (!TOKEN.startsWith('ghp_')) {
	console.warn('⚠️  Advertencia: El token no empieza con "ghp_" (formato de Personal Access Token)');
}

// Probar la API de GitHub
async function testToken() {
	try {
		// Primero, verificar que el token es válido probando con la API de usuario
		console.log('1. Verificando autenticación con el token...');
		const userResponse = await fetch('https://api.github.com/user', {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
				'Authorization': `token ${TOKEN}`,
			},
		});

		if (!userResponse.ok) {
			const errorText = await userResponse.text();
			console.error(`❌ Error de autenticación: ${userResponse.status}`);
			console.error(`   ${errorText}`);
			process.exit(1);
		}

		const userData = await userResponse.json();
		console.log(`   ✅ Autenticado como: ${userData.login} (${userData.name || 'Sin nombre'})`);

		// Verificar permisos del token
		console.log('\n2. Verificando permisos del token...');
		const scopes = userResponse.headers.get('x-oauth-scopes')?.split(', ') || [];
		const hasRepoScope = scopes.includes('repo');
		const hasWorkflowScope = scopes.includes('workflow');

		console.log(`   Scopes disponibles: ${scopes.join(', ') || 'ninguno'}`);
		
		if (!hasRepoScope) {
			console.warn('   ⚠️  El token no tiene el scope "repo" necesario');
		} else {
			console.log('   ✅ Scope "repo" disponible');
		}

		if (!hasWorkflowScope) {
			console.warn('   ⚠️  El token no tiene el scope "workflow" (puede ser necesario)');
		} else {
			console.log('   ✅ Scope "workflow" disponible');
		}

		// Verificar acceso al repositorio
		console.log(`\n3. Verificando acceso al repositorio ${REPO_OWNER}/${REPO_NAME}...`);
		const repoResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`, {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
				'Authorization': `token ${TOKEN}`,
			},
		});

		if (!repoResponse.ok) {
			const errorText = await repoResponse.text();
			console.error(`   ❌ No se puede acceder al repositorio: ${repoResponse.status}`);
			console.error(`   ${errorText}`);
			process.exit(1);
		}

		const repoData = await repoResponse.json();
		console.log(`   ✅ Repositorio accesible: ${repoData.full_name}`);
		console.log(`   Visibilidad: ${repoData.private ? 'Privado' : 'Público'}`);

		// Probar repository_dispatch
		console.log('\n4. Probando repository_dispatch...');
		const dispatchResponse = await fetch(
			`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/dispatches`,
			{
				method: 'POST',
				headers: {
					'Accept': 'application/vnd.github.v3+json',
					'Authorization': `token ${TOKEN}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					event_type: 'test-update',
					client_payload: {
						test: true,
						timestamp: new Date().toISOString(),
					},
				}),
			}
		);

		const dispatchStatus = dispatchResponse.status;
		const dispatchBody = await dispatchResponse.text().catch(() => 'No body');

		if (dispatchStatus === 204 || dispatchStatus === 200) {
			console.log(`   ✅ repository_dispatch exitoso (status: ${dispatchStatus})`);
			console.log('\n✅ ¡Todo funciona correctamente!');
			console.log('\nEl token está configurado y tiene los permisos necesarios.');
			console.log('Puedes configurarlo en GitHub Secrets como PORTFOLIO_DISPATCH_TOKEN.');
		} else {
			console.error(`   ❌ repository_dispatch falló (status: ${dispatchStatus})`);
			console.error(`   Respuesta: ${dispatchBody}`);
			
			if (dispatchStatus === 404) {
				console.error('\n   Posibles causas:');
				console.error('   - El repositorio no existe o no tienes acceso');
				console.error('   - El token no tiene permisos para este repositorio');
			} else if (dispatchStatus === 403) {
				console.error('\n   Posibles causas:');
				console.error('   - El token no tiene el scope "repo" o "workflow"');
				console.error('   - El repositorio no permite repository_dispatch');
			}
			
			process.exit(1);
		}

	} catch (error) {
		console.error('\n❌ Error inesperado:', error.message);
		process.exit(1);
	}
}

testToken();


