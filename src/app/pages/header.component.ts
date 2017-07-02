import { Component } from '@angular/core';

@Component({
  selector: "hvac-header",
  template: `
    <!-- Top Nav -->
        <header id="topNav" class="fixed">
            <div class="container">
                <!-- Logo -->
                <a class="logo onepage" href="index.html">
                    <img src="assets/leemtek/images/hvac-utor-services-logo.jpg" height="50" alt="" />
                </a>

                <!-- Mobile Menu Button -->
                <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>

                <!-- Top Nav -->
                <div class="navbar-collapse nav-main-collapse collapse pull-right">
                    <nav class="nav-main">

                        <ul id="topMain" class="nav nav-pills nav-main">
                            <li><a class="scrollTo" href="#wrapper">HOME <span>welcome</span></a></li>
                            <li><a class="scrollTo" href="#about">ABOUT <span>about us</span></a></li>
                            <li><a class="scrollTo" href="#services">SERVICES <span>our offer</span></a></li>
                            <li><a class="scrollTo" href="#contact">CONTACT <span>information</span></a></li>
                        </ul>

                    </nav>
                </div>
                <!-- /Top Nav -->

            </div><!-- /.container -->
        </header>
    <!-- /Top Nav -->
  `,
  styles: ['']
})
export class HeaderComponent {
  
}