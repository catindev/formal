import React from 'react'
import CSSModules from 'react-css-modules'

let styles = {}
import demo from './Demo.css'

import { common, normal, group } from '../../formal/buttons'
Object.assign(styles, common. demo)
Object.assign(styles, normal)
Object.assign(styles, group)

function Demo( props) {

    const { route } = props;

    return (
    	<div styleName='demo'>
            <p><button styleName='normal'>default</button></p>
            <p><button styleName='normal big'>big</button></p>
            <p><button styleName='normal toggled'>toggled</button></p>
            <p><button styleName='normal' disabled>disabled</button></p>
            <p><div styleName='buttons'>
                <button styleName='normal grouped'>first</button>
                <button styleName='normal grouped' disabled>middle</button>
                <button styleName='normal grouped'>last</button>
            </div></p>
       	</div>
    );
}

export default CSSModules(Demo, styles, {allowMultiple: true} )
