<script>



	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { base } from '$app/paths';
</script>
<svelte:head>
    <link href="https://fonts.cdnfonts.com/css/open-dyslexic" rel="stylesheet">

</svelte:head>


<nav>
	<!-- <a href="{base}/hem">Hem</a>
	<a href="{base}/photoapp">PhotoApp</a>
	<a href="{base}/register">Register</a>
	<a href="{base}/login">Login</a>
	<a href="{base}/shoppinglist">Shoppinglist</a>
	<a href="{base}/memory">Memory</a>
	<a href="{base}/chat">Chat</a>
	<a href="{base}/search">Search</a>
	<a href="{base}/cups">CupGame</a>
	<a href="{base}/maze">Maze</a>
	<a href="{base}/shop">Shop</a>
	<a href="{base}/exempel_prov">Prov</a> -->
</nav>

<style>
	
	:global(body), :global(html){
		margin: 0%;
	padding: 0%;
	height: 100vh;
	width: 100vw;
	}    
</style>

<slot />
