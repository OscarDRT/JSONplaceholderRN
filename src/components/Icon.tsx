import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function ChevronRight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 9 14" fill="none" {...props}>
      <Path
        d="M.356 2.073C-.119 1.608-.119.842.356.349c.504-.465 1.286-.465 1.762 0l5.926 5.775a1.255 1.255 0 010 1.752l-5.926 5.775c-.476.465-1.258.465-1.762 0a1.255 1.255 0 010-1.752L5.388 7 .356 2.073z"
        fill="#2B2845"
      />
    </Svg>
  )
}

function ChevronLeft(props: SvgProps) {
  return (
    <Svg width={9} height={14} viewBox="0 0 9 14" fill="none" {...props}>
      <Path
        d="M8.043 11.927c.476.465.476 1.231 0 1.724-.503.465-1.285.465-1.76 0L.355 7.876a1.254 1.254 0 010-1.752L6.282.35c.476-.465 1.258-.465 1.761 0a1.254 1.254 0 010 1.752L3.013 7l5.031 4.927z"
        fill="#ffffff"
      />
    </Svg>
  )
}

const ICONS = {
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
}

export type IconName = keyof typeof ICONS

interface IconProps {
  name?: IconName
  size?: number
  width?: number
  height?: number
}

export const Icon = ({ name, size = 20, width, height, ...props }: IconProps & Omit<SvgProps, 'height' | 'width'>) => {
  const Iconimpl = name !== undefined ? ICONS[name] : null

  return Iconimpl ? <Iconimpl width={width ? width : size} height={height ? height : size} {...props} /> : null
}
