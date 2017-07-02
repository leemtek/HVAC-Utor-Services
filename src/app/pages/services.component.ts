import { Component } from '@angular/core';

@Component({
  selector: "hvac-services",
  template: `
    <!-- SERVICES -->
			<section id="services" class="alternate">
				<div class="container">

					<header class="text-center">

						<h1 class="font-dosis">
							<strong>OUR</strong> SERVICES
						</h1>

						<div class="divider half-margins onepage center"><!-- lines divider --></div>

					</header>

					<hr class="half-margins invisible" /><!-- 60px spacer -->

					<div class="row">
					
						<div class="col-md-4">
						
							<figure>
								<img class="img-responsive" src="assets/leemtek/images/ac-manifold.jpg" alt="" />
							</figure>

							<h4>A/C Installation and Repair</h4>
							<p><span class="text-danger">HVAC UTOR SERVICE</span> justo, lacinia eget
							consectetur sed, convallis at tellus. Curabitur
							non nulla sit amet nisl tempus convallis quis ac
							lectus. Curabitur arcu erat, accumsan id
							imperdiet et, porttitor at sem. Vivamus suscipit
							tortor eget felis porttitor volutpat. Donec
							sollicitudin molestie malesuada.</p>

						</div>

						<div class="col-md-4">
						
							<figure>
								<img class="img-responsive" src="assets/leemtek/images/furnace.jpg" alt="" />
							</figure>

							<h4>Furnace Installation and Repair</h4>
							<p><span class="text-danger">HVAC UTOR SERVICE</span> in ipsum id orci porta
							dapibus. Pellentesque in ipsum id orci porta
							dapibus. Pellentesque in ipsum id orci porta
							dapibus. Curabitur non nulla sit amet nisl
							tempus convallis quis ac lectus.</p>

						</div>

						<div class="col-md-4">
						
							<figure>
								<img class="img-responsive" src="assets/leemtek/images/carrier-condenser-2.jpg" alt="" />
							</figure>

							<h4>Residential and Commercial</h4>
							<p><span class="text-danger">HVAC UTOR SERVICE</span> Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Pellentesque in
							ipsum id orci porta dapibus. Vestibulum ac
							diam sit amet quam vehicula elementum sed sit
							amet dui. Cras ultricies ligula sed magna
							dictum porta. Vivamus suscipit tortor eget felis
							porttitor volutpat. Praesent sapien massa,
							convallis a pellentesque nec, egestas non nisi.</p>

						</div>

						<div class="col-md-4">
						
							<figure>
								<img class="img-responsive" src="assets/leemtek/images/duckwork-3.jpg" alt="" />
							</figure>

							<h4>Ductwork</h4>
							<p><span class="text-danger">HVAC UTOR SERVICE</span> porttitor lectus nibh. Donec
							rutrum congue leo eget malesuada. Sed
							porttitor lectus nibh. Praesent sapien massa,
							convallis a pellentesque nec, egestas non nisi.
							Pellentesque in ipsum id orci porta dapibus.</p>

						</div>

						<div class="col-md-4">
						
							<figure>
								<img class="img-responsive" src="assets/leemtek/images/duct-cleaning.jpg" alt="" />
							</figure>

							<h4>Duct Cleaning and Sealing</h4>
							<p><span class="text-danger">HVAC UTOR SERVICE</span> sapien massa, convallis a
							pellentesque nec, egestas non nisi. Nulla quis
							lorem ut libero malesuada feugiat. Praesent
							sapien massa, convallis a pellentesque nec,
							egestas non nisi. Vestibulum ac diam sit amet
							quam vehicula elementum sed sit amet dui.
							Vestibulum ac diam sit amet quam vehicula
							elementum sed sit amet dui. Quisque velit nisi,
							pretium ut lacinia in, elementum id enim.</p>

						</div>

					</div>

				</div>
			</section>
    <!-- /SERVICES -->
  `,
  styles: ['']
})
export class ServicesComponent {
  
}