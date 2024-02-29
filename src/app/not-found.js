import React from 'react';

const Error404 = () => {
  return (
    <section class="page_404 flex justify-center align-middle">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center text-slate-900 font-logo"> 404 Page not Found! </h1>
		</div>
		
		<div class="contant_box_404 text-slate-900 ">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p className='font-bold'>the page you are looking for not avaible!</p>
		
		<a href="/" class="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  );
};

export default Error404;
