import React from "react";
import "./footer.css"
function Footer() {
    return (
        <section class="footer">
            <div class="container">
                <div class="footer__content">
                    <div class="footer__heading">
                        <h2>Shubham</h2>
                        <h4>9877883408</h4>
                    </div>
                    <p class="mb-0">Content & Graphics © 2020 sshubhamk1@gmail.com</p>

                    <ul class="social__media">
                        <li><a href="https://github.com/sshubhamk1"><i class="fab fa-github" aria-hidden="true"></i> </a></li>
                        <li><a href="https://www.linkedin.com/in/sshubhamk1/"><i class="fab fa-linkedin-in" aria-hidden="true"></i> </a></li>
                        <li><a href="mailto:aparnasuman2@gmail.com"><i class="far fa-envelope" aria-hidden="true"></i> </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Footer;