import { Component } from '@angular/core';

@Component({
  selector: "hvac-gallery",
  template: `
    <!-- SECTION -->
			<section>
				<div class="container">
					
					
					<header class="text-center">
						<h1 class="font-dosis">
							<strong>OUR</strong> GALLERY
						</h1>
						<div class="divider half-margins onepage center"><!-- lines divider --></div>
					</header>

					
					<div id="portfolio" class="container">

						<div class="row">

							<ul class="sort-destination isotope" data-sort-id="isotope-list">

								<li class="text-center isotope-item col-sm-4 col-md-3 development"><!-- item -->
									<div class="item-box">
										<figure>
											<img class="img-responsive" src="assets/leemtek/images/carrier-condenser.jpg" width="100%" height="260" alt="">
										</figure>
										<div class="text-left item-box-desc">
											<h4>Carrier Installation</h4>
											<small class="styleColor">January 12, 2012</small>
										</div>
									</div>
								</li>

								<li class="text-center isotope-item col-sm-4 col-md-3 development"><!-- item -->
									<div class="item-box">
										<figure>
											<img class="img-responsive" src="assets/leemtek/images/ductwork.jpg" width="100%" height="260" alt="">
										</figure>
										<div class="text-left item-box-desc">
											<h4>Ductwork Installation</h4>
											<small class="styleColor">January 12, 2012</small>
										</div>
									</div>
								</li>

								<li class="text-center isotope-item col-sm-4 col-md-3 development"><!-- item -->
									<div class="item-box">
										<figure>
											<img class="img-responsive" src="assets/leemtek/images/duckwork-1.jpg" width="100%" height="260" alt="">
										</figure>
										<div class="text-left item-box-desc">
											<h4>Ductwork Installation</h4>
											<small class="styleColor">January 12, 2012</small>
										</div>
									</div>
								</li>

								<li class="text-center isotope-item col-sm-4 col-md-3 development"><!-- item -->
									<div class="item-box">
										<figure>
											<img class="img-responsive" src="assets/leemtek/images/two-carrier-condenser.jpg" width="100%" height="260" alt="">
										</figure>
										<div class="text-left item-box-desc">
											<h4>Carrier Installation</h4>
											<small class="styleColor">January 12, 2012</small>
										</div>
									</div>
								</li>

								<li class="text-center isotope-item col-sm-4 col-md-3 development"><!-- item -->
									<div class="item-box">
										<figure>
											<img class="img-responsive" src="assets/leemtek/images/carrier-condenser-1.jpg" width="100%" height="260" alt="">
										</figure>
										<div class="text-left item-box-desc">
											<h4>Carrier Installation</h4>
											<small class="styleColor">January 12, 2012</small>
										</div>
									</div>
								</li>

								<li class="text-center isotope-item col-sm-4 col-md-3 development"><!-- item -->
									<div class="item-box">
										<figure>
											<img class="img-responsive" src="assets/leemtek/images/duckwork-2.jpg" width="100%" height="260" alt="">
										</figure>
										<div class="text-left item-box-desc">
											<h4>Professional Installation</h4>
											<small class="styleColor">January 12, 2012</small>
										</div>
									</div>
								</li>

								
							</ul>

						</div><!-- /.masonry-container -->

					</div>


				</div>
			</section>
    <!-- /SECTION -->
  `,
  styles: ['']
})
export class GalleryComponent {
  
}