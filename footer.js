const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms of service</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">twitter</a>
                <a href="#" class="social-link">tiktok</a>
            </div>
        </div>
        <p class="footer-credit">Mugen</p>
    `;
}

createFooter();