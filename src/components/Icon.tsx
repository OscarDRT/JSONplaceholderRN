import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function ChevronRight(props: SvgProps) {
  return (
    <Svg viewBox="0 0 9 14" fill="none" {...props}>
      <Path
        d="M.356 2.073C-.119 1.608-.119.842.356.349c.504-.465 1.286-.465 1.762 0l5.926 5.775a1.255 1.255 0 010 1.752l-5.926 5.775c-.476.465-1.258.465-1.762 0a1.255 1.255 0 010-1.752L5.388 7 .356 2.073z"
        fill={props.fill ?? '#2B2845'}
      />
    </Svg>
  )
}

function ChevronLeft(props: SvgProps) {
  return (
    <Svg width={9} height={14} viewBox="0 0 9 14" fill="none" {...props}>
      <Path
        d="M8.043 11.927c.476.465.476 1.231 0 1.724-.503.465-1.285.465-1.76 0L.355 7.876a1.254 1.254 0 010-1.752L6.282.35c.476-.465 1.258-.465 1.761 0a1.254 1.254 0 010 1.752L3.013 7l5.031 4.927z"
        fill={props.fill ?? '#2B2845'}
      />
    </Svg>
  )
}

function Star(props: SvgProps) {
  return (
    <Svg width={512} height={512} viewBox="0 0 512.001 512.001" {...props}>
      <Path
        d="M499.92 188.26l-165.839-15.381L268.205 19.91c-4.612-10.711-19.799-10.711-24.411 0l-65.875 152.97L12.08 188.26c-11.612 1.077-16.305 15.52-7.544 23.216l125.126 109.922-36.618 162.476c-2.564 11.376 9.722 20.302 19.749 14.348L256 413.188l143.207 85.034c10.027 5.954 22.314-2.972 19.75-14.348l-36.619-162.476 125.126-109.922c8.761-7.696 4.068-22.139-7.544-23.216z"
        fill={props.fill ?? '#ffc850'}
        data-original="#ffdc64"
      />
      <Path
        d="M268.205 19.91c-4.612-10.711-19.799-10.711-24.411 0l-65.875 152.97L12.08 188.26c-11.612 1.077-16.305 15.52-7.544 23.216l125.126 109.922-36.618 162.476c-2.564 11.376 9.722 20.302 19.749 14.348l31.963-18.979c4.424-182.101 89.034-310.338 156.022-383.697L268.205 19.91z"
        fill={props.fill ?? '#ffc850'}
        data-original="#ffc850"
      />
    </Svg>
  )
}

const ICONS = {
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  star: Star,
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
