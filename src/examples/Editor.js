/*
 * Live Editor Component For react-reveal
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { LiveProvider, LiveEditor, LivePreview} from '../vendor/react-live/';
import './Editor.css'

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';

import Flash from 'react-reveal/Flash';
import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';
import Spin from 'react-reveal/Spin';
import Swing from 'react-reveal/Swing';
import Tada from 'react-reveal/Tada';
import Wobble from 'react-reveal/Wobble';

const scope = { Fade, Flip, Rotate, Zoom, Roll, Bounce, Slide, LightSpeed,
	Flash, HeadShake, Jello, Jump, Pulse, RubberBand, Shake, Spin, Swing, Tada, Wobble };

class Example extends React.Component {

 constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
  	this.setState({ hasError: true });
  }

  truncate(code) {
  	return code.replace(/[^\0]*\nclass\s/gm,"\n\n\n\nclass ").replace(/(export\s.*)/gm,'');
  }

	render() {
		if (this.state.hasError) {
		  return (
		  	<div>
		  		<h2>Oops, the live editor just crashed</h2>
		  		<button
		  			onClick={ ()=> this.setState({ hasError: false })}
		  			type="button"
		  			className="btn btn-success"
		  		>
		  			Reset Editor
		  		</button>
		  	</div>
		  );
    }
		const code = this.props.children;
		return (
			<LiveProvider transformCode={ (code) => this.truncate(code) } scope={scope} code={code} mountStylesheet={false}>
			  <div className="row no-gutters" >
			  	<div className="col-12 col-md-6 order-md-2">
			  	  <div className="live-preview-container" >
			  	    <div>{this.props.menu}</div>
			  	  	<LivePreview className="live-preview" />
			  	  </div>
			  	</div>
          <div className="col-12 col-md-6 order-md-1 live-editor" ref={ (node) => this.node = node } >
            <LiveEditor style={{ paddingTop: '0px'}} />
          </div>
			 	</div>
			</LiveProvider>
		);
	}

}


export default Example;