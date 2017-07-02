import { Component } from '@angular/core';

@Component({
  selector: "hvac-footer",
  template: `
    <!-- FOOTER -->
		<footer id="footer">
			<div class="container">

				<div class="row">

					<!-- col #1 -->
					<div class="logo_footer dark col-md-3">

						<h4>About<strong> HVAC UTOR SERVICE</strong></h4>

						<p class="block">
							Nulla quis lorem ut libero malesuada feugiat.
							Curabitur aliquet quam id dui posuere blandit.
							Donec rutrum congue leo eget malesuada.
						</p>

						<h3>(925) 378-8961</h3>

						<p class="block"><!-- social -->
							<a href="#" class="social fa fa-facebook"></a>
							<a href="#" class="social fa fa-twitter"></a>
							<a href="#" class="social fa fa-google-plus"></a>
							<a href="#" class="social fa fa-linkedin"></a>
						</p><!-- /social -->
					</div>
					<!-- /col #1 -->

					<!-- col #2 -->
					<div class="spaced col-md-3 col-sm-4 hidden-xs">

					</div>
					<!-- /col #2 -->

					<!-- col #3 -->
					<div class="spaced col-md-3 col-sm-4 hidden-xs">
						<h4>Explore <strong>Us</strong></h4>
						<ul class="list-unstyled nobordered">
							<li><a class="block" href="#wrapper"><i class="fa fa-angle-right"></i> Home</a></li>
							<li><a class="block" href="#about"><i class="fa fa-angle-right"></i> About</a></li>
							<li><a class="block" href="#services"><i class="fa fa-angle-right"></i> Services</a></li>
							<li><a class="block" href="#contact"><i class="fa fa-angle-right"></i> Contact</a></li>
						</ul>

					</div>
					<!-- /col #3 -->

					<!-- col #4 -->
					<div class="spaced col-md-3 col-sm-4">
						<h4>Secure <strong>Payment</strong></h4>
						<p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet.</p>
						<p>	<!-- see assets/images/cc/ for more icons -->
							<img src="assets/images/cc/Visa.png" alt="" />
							<img src="assets/images/cc/Mastercard.png" alt="" />
							<img src="assets/images/cc/Maestro.png" alt="" />
							<img src="assets/images/cc/PayPal.png" alt="" />
						</p>
					</div>

					<!-- /col #4 -->

				</div>

			</div>

			<hr />

			<div class="copyright">
				<div class="container text-center fsize12">
					Web Development by LeemTek.com • All Right Reserved © HVAC Utor Service.
				</div>
			</div>
		</footer>
		<!-- /FOOTER -->

    <a href="#" id="toTop"></a>
  `,
  styles: ['']
})
export class FooterComponent {
  
}