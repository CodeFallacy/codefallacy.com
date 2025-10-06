<script lang="ts">
    import codefallacy from '$lib/assets/codefallacy/codefallacy-transparent.svg';
    import bmc from '$lib/assets/codefallacy/bmc-button.svg';
    import svg from '$lib/assets/codefallacy/youtube.svg';
</script>

<svelte:head>
    <title>CodeFallacy</title>
    <meta name="description" content="The companion website to the tech tutorial Youtube Channel CodeFallacy, which includes written guides that go along with the videos" />
    <meta name="keywords" content="homelab, self-host, proxmox, docker, lxc, vm, linux, debian, ubuntu, arch, omarchy, fedora, red hat, raspberry pi, pihole, home assistant, immich, jellyfin" /> 
</svelte:head>

<div class="flex flex-col h-[100vh] w-[100vw] items-center justify-center bg-indigo-900 text-yellow-100">
    <div class=" bg-blue-950 rounded-full mb-4 drop-shadow-2xl">
        <img src={codefallacy} alt="codefallacy" width="250" height="250" fetchpriority='high'/>
    </div>
    <div class="text-2xl flex flex-col items-center justify-center mt-5 px-6 max-sm:text-xl">
        <p>Hello!</p>
        <p>Currently this site is under construction!</p>
        <p>In the meantime, Check my Youtube Channel</p>
    </div>

    <div class="w-full flex justify-center mt-15 max-sm:flex-col max-sm:items-center">
        <div class="sm:mr-5 max-sm:mb-6">
            <a href="https://www.youtube.com/@codefallacy">
                <img src={svg}
                    alt="codefallacy youtube channel"
                    width="180"
                />
            </a>
        </div>

        <div class="sm:ml-5">
            <a href="https://buymeacoffee.com/codefallacy">
                <img src={bmc} alt="buy-me-a-coffee" width="180"/>
            </a>
        </div>
    </div>
</div>
