import React from 'react'
import PropTypes from 'prop-types'
// import Image from 'next/image'


const MK = props => {
  return (
    <svg {...props} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
	<title>MK</title>
	<style jsx>
    {`
		.s0 { fill: none;stroke: inherit;stroke-width: 10 } 
		.s1 { paint-order:stroke fill markers;stroke: inherit;stroke-width: 6;stroke-linejoin: round;;fill: inherit } 
		.s2 { fill: none;stroke: inherit;stroke-width: 50 } 
    `}
	</style>
	<path id="Shape 3" className="s0" d=""/>
	<path id="MK" className="s1" aria-label="MK"  d="M 150 450 L 150 100 Q 350 250 500 600 L 450 600 L 200 300 L 200 600 L 150 600 L 150 450 L 200 450 L 350 450 L 450 450 Q 350 500 200 500 L 150 500 L 150 450 L 200 450 L 350 450 L 450 600 L 500 600 L 550 600 L 550 550 Q 550 325 550 100 Q 550 50 600 100 Q 600 250 600 400 Q 650 300 750 250 Q 750 300 700 350 Q 650 400 600 450 Q 700 500 750 600 Q 700 600 650 550 L 600 500 L 600 550 L 600 600 "/>
	<path id="Shape 2" className="s2" d="m264.5 936.2l-247.5-424.1 247.5-424.1h495l247.5 424.1-247.5 424.1z"/>
</svg>
  )
}

MK.propTypes = {}

export default MK