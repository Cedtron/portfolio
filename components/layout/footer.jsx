import React from 'react';

export default function Footer() {
 let datey=new Date().getFullYear()

    return (
        <footer>

     <div className="site-footer">
	

<hr/>
		<div className="inner dark">
			<div className="container">
				<div className="row text-center">
					<div className="col-md-8 mb-3 mb-md-0 mx-auto">
						<p>Copyright &copy;{datey}. All Rights Reserved.
						</p>
					</div>
					
				</div>
			</div>
		</div>
	 </div>

        </footer>
    );
}

