import bootstrap from './utils/bootstrap';
import example from './modules/example';

// Bootstrap the app and all dependencies
bootstrap();

example('did something', (x) => {
	console.log(x);
	console.log(window.$)
})