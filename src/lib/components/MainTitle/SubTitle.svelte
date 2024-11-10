<script lang="ts">
	export let classes = '';
</script>

<h2
	class={`font-[var(--title-f)] font-black tracking-[4px] text-center text-1.5em sm:text-[1.5em] md:text-[2em] lg:text-[2.5em] ${classes}`}
	style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
>
	<slot />
</h2>
