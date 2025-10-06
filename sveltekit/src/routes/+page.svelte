<script lang="ts">
    import codefallacy from '$lib/assets/codefallacy/codefallacy-transparent.svg';
    import bmc from '$lib/assets/codefallacy/bmc-button.svg';
    import svg from '$lib/assets/codefallacy/youtube.svg';
</script>

<div class="flex flex-col h-[100vh] w-[100vw] items-center justify-center bg-indigo-900 text-yellow-100">
    <div class=" bg-blue-950 rounded-full mb-4 drop-shadow-2xl">
        <img src={codefallacy} alt="codefallacy" width="250" height="250"/>
    </div>
    <div class="text-2xl flex flex-col items-center justify-center mt-5">
        <p>Hello, currently this site is under construction!</p>
        <p>In the meantime, Check my Youtube Channel.</p>
    </div>

    <div class="w-full flex justify-center mt-15">
        <div class="mr-5">
            <a href="https://www.youtube.com/@codefallacy">
                <img src={svg}
                    alt="codefallacy youtube channel"
                    width="180"
                />
            </a>
        </div>

        <div class="ml-5">
            <a href="https://buymeacoffee.com/codefallacy">
                <img src={bmc} alt="buy-me-a-coffee" width="180"/>
            </a>
        </div>

    </div>

</div>
