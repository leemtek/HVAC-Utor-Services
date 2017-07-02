import { Component } from '@angular/core';

@Component({
  selector: "hvac-home",
  template: `
    <!-- REVOLUTION SLIDER -->
			<div class="onepage-slider-offset">

				<div class="slider fullwidthbanner-container roundedcorners">
					<div class="fullscreenbanner tp-simpleresponsive">
						<ul class="hide">

							<!-- SLIDE  -->
							<li data-transition="boxfade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="off"  data-title="Slide">
								
								<img src="assets/images/1x1.png" data-lazyload="assets/leemtek/images/commercial-ac-opacity.jpg" alt="" data-bgfit="cover" data-bgposition="center bottom" data-bgrepeat="no-repeat" />

								<div class="tp-caption very_large_text lfb ltt tp-resizeme"
									data-x="center" data-hoffset="0"
									data-y="center" data-voffset="-100"
									data-speed="600"
									data-start="800"
									data-easing="Power4.easeOut"
									data-splitin="none"
									data-splitout="none"
									data-elementdelay="0.01"
									data-endelementdelay="0.1"
									data-endspeed="500"
									data-endeasing="Power4.easeIn">HVAC UTOR SERVICES<hr />
								</div>

								<div class="text-center tp-caption medium_light_white lfb ltt tp-resizeme"
									data-x="center" data-hoffset="0"
									data-y="center" data-voffset="50"
									data-speed="600"
									data-start="900"
									data-easing="Power4.easeOut"
									data-splitin="none"
									data-splitout="none"
									data-elementdelay="0.01"
									data-endelementdelay="0.1"
									data-endspeed="500"
									data-endeasing="Power4.easeIn">
									HVAC UTOR SERVICES is a family run and owned HVAC company.<br />
									We’ve been serving the Bay Area its heating and cooling needs,<br />
									ductwork, Residential and Commercial. Im fueled by my commitment<br />
									to excellence and go to extra mile to make sure my clients are<br />
									completely satisfied with my work. Call and schedule an<br />
									initial Consultation today.
								</div>
							</li>

						</ul>
						<div class="tp-bannertimer"></div>
					</div>
				</div>

			</div><!-- /topnav offset -->
    <!-- /REVOLUTION SLIDER -->
  `,
  styles: [`
  		
  		hr {
			margin: 12px 0;
		}
  `]
})
export class HomeComponent {
  
}