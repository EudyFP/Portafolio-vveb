"use client"
import Image from "next/image";
export default function GitHubLogo() {
    return (
        <>
        <Image src="/assets/icons8-github-light.svg" alt="Github logo" title="Github" width={50} height={50} data-hide-on-theme="dark" priority/>
        <Image src="/assets/icons8-github-dark.svg" alt="Github logo" title="Github" width={50} height={50} data-hide-on-theme="light" priority/>
        </>
    );
}