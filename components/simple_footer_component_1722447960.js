/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722447960", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 to-purple-600 backdrop-blur-xl bg-opacity-20 rounded-2xl shadow-2xl">
            <div id="footer-container" class="max-w-screen-xl p-10 py-12 mx-auto lg:py-18 md:p-14 lg:p-16">
                <hr id="footer-divider" class="my-10 border-pink-300 sm:mx-auto opacity-30 lg:my-12">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-8 text-4xl font-extrabold text-white drop-shadow-lg">
                            <img id="footer-logo" src="./images/logo.svg" class="h-10 mr-5 sm:h-12 filter drop-shadow-xl" alt="Landwind Logo" />
                            Product Insights
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-xl text-center text-white font-medium backdrop-blur-2xl bg-white bg-opacity-10 rounded-2xl p-8 shadow-2xl">
                        Unlock valuable market intelligence with our AI-powered product analysis tool. Stay ahead of trends and make data-driven decisions for your business.
                    </div>
                    </div>
                </div>
                <div class="flex justify-center mt-8">
                    <button class="bg-white text-purple-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-100 transition duration-300">Grea</button>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
