<template>
    <div
        class="h-screen bg-gradient-to-b from-rose-400 via-fuchsia-600 to-violet-600 font-mono pt-20"
    >
        <img
            class="hidden xl:block absolute bottom-1 w-80 right-1"
            src="https://i.imgur.com/DheQKb7.png"
            alt=""
        />
        <div class="max-w-4xl pb-10 bg-gray-300 mx-auto flex flex-col items-center relative">
            <WindowBar />
            <slot />
        </div>
    </div>
</template>