import CommandBase from 'elementor-api/modules/command-base';

export class Load extends CommandBase {
	apply( args ) {
		const component = this.component;

		if ( ! component.iframe ) {
			component.iframe = document.createElement( 'iframe' );
			component.iframe.className = 'elementor-app-iframe';
			component.iframe.style.cssText = '' +
				'display: none;' +
				'width: 100%;' +
				'height: 100%;' +
				'position: absolute;' +
				'top: 0;' +
				'left: 0;' +
				'z-index: 99999; /* Over WP Admin Bar */' +
				'background-color: rgba(0, 0, 0, 0.8);';

			document.body.appendChild( component.iframe );
		}

		const url = args.url.replace( 'elementor-app', 'elementor-app&mode=iframe' );

		if ( url === component.iframe.src ) {
			return;
		}

		component.iframe.src = url;
	}
}

export default Load;
