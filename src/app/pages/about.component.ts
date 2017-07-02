import { Component } from '@angular/core';

@Component({
  selector: "hvac-about",
  template: `
    <!-- SECTION -->
			<section id="about" class="alternate">
				<div class="container">
					
					<div class="row">

						<div class="col-sm-offset-1 col-sm-4"><!-- left image -->
							<!-- add class "controlls-over" if you need the button controlls over the image -->
							<div class="owl-carousel controlls-over" data-plugin-options='{"items": 1, "autoHeight": true, "navigation": true, "pagination": false, "transitionStyle":"fadeUp"}'><!-- transitionStyle: fade, backSlide, goDown, fadeUp,  -->
								<div>
									<img alt="" class="img-responsive" src="assets/leemtek/images/owner.jpg">
								</div>
								<div>
									<img alt="" class="img-responsive" src="assets/leemtek/images/duckwork-4.jpg">
								</div>
							</div>
						</div><!-- /left image -->

						<div class="col-sm-6">
							<h3><strong>ABOUT</strong> HVAC UTOR SERVICES</h3>
							<p>Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.</p>
							<p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
						</div>

					</div>

				</div>
			</section>
    <!-- /SECTION -->
  `,
  styles: ['']
})
export class AboutComponent {
  
}