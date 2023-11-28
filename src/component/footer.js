import ff from '../img/ff.png';
const Footer = () => {
    return (
        <>
        <footer style={{ backgroundColor : '#1f2937'}}>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
                <img src={ff} class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{ color : '#f9fafb'}}>Film Fusion</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6 " style={{ color : '#f9fafb'}}>About</a>
                </li>
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6" style={{ color : '#f9fafb'}}>Privacy Policy</a>
                </li>
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6 " style={{ color : '#f9fafb'}}>Licensing</a>
                </li>
                <li>
                    <a href="/" class="hover:underline" style={{ color : '#f9fafb'}}>Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Film Fusion. All Rights Reserved.</span>
    </div>
</footer>
        </>
    )
}
export default Footer