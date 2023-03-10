export type TailwindClassName =
     `ease-linear`
      | `duration-${number}`
      | `delay-${number}`
      | `transition`
      | `animate-bounce`
      | `animate-none`
      | `animate-ping`
      | `animate-pulse`
      | `animate-spin`
      | `bg-auto`
      | `bg-cover`
      | `bg-contain`
      | `bg-bottom`
      | `bg-top`
      | `bg-center`
      | `bg-left`
      | `bg-left-bottom`
      | `bg-left-top`
      | `bg-right`
      | `bg-right-bottom`
      | `bg-right-top`
      | `bg-fixed`
      | `bg-local`
      | `bg-scroll`
      | `bg-no-repeat`
      | `bg-repeat`
      | `bg-repeat-x`
      | `bg-repeat-y`
      | `bg-repeat-round`
      | `bg-repeat-space`
      | `bg-opacity-${number}`
      | `bg-none`
      | `bg-clip-border`
      | `bg-clip-content`
      | `bg-clip-padding`
      | `bg-clip-text`
      | `bg-transparent`
      | `bg-current`
      | `bg-black`
      | `bg-white`
      | `bg-gray-${number}`
      | `bg-red-${number}`
      | `bg-orange-${number}`
      | `bg-yellow-${number}`
      | `bg-green-${number}`
      | `bg-teal-${number}`
      | `bg-blue-${number}`
      | `bg-indigo-${number}`
      | `bg-purple-${number}`
      | `bg-pink-${number}`
      | `bg-gradient-to-b`
      | `bg-gradient-to-bl`
      | `bg-gradient-to-br`
      | `bg-gradient-to-l`
      | `bg-gradient-to-r`
      | `bg-gradient-to-t`
      | `bg-gradient-to-tl`
      | `bg-gradient-to-tr`
      | `from-blue-${number}`
      | `from-current`
      | `from-gray-${number}`
      | `from-indigo-${number}`
      | `from-pink-${number}`
      | `from-purple-${number}`
      | `from-red-${number}`
      | `from-transparent`
      | `from-white`
      | `from-yellow-${number}`
      | `to-black`
      | `to-blue-${number}`
      | `to-current`
      | `to-gray-${number}`
      | `to-green-${number}`
      | `to-indigo-${number}`
      | `to-pink-${number}`
      | `to-purple-${number}`
      | `to-red-${number}`
      | `to-transparent`
      | `to-white`
      | `to-yellow-${number}`
      | `top-${number}`
      | `via-black`
      | `via-blue-${number}`
      | `via-current`
      | `via-gray-${number}`
      | `via-green-${number}`
      | `via-indigo-${number}`
      | `via-pink-${number}`
      | `via-purple-${number}`
      | `via-red-${number}`
      | `via-transparent`
      | `via-white`
      | `via-yellow-${number}`
      | `border-transparent`
      | `border-current`
      | `border-black`
      | `border-white`
      | `border-gray-${number}`
      | `border-red-${number}`
      | `border-orange-${number}`
      | `border-yellow-${number}`
      | `border-green-${number}`
      | `border-teal-${number}`
      | `border-blue-${number}`
      | `border-indigo-${number}`
      | `border-purple-${number}`
      | `border-pink-${number}`
      | `border-solid`
      | `border-dashed`
      | `border-dotted`
      | `border-double`
      | `border-none`
      | `border`
      | `border-${number}`
      | `border-opacity-${number}`
      | `divide-x`
      | `divide-x-${number}`
      | `divide-y`
      | `divide-y-${number}`
      | `divide-gray-${number}`
      | `divide-x-reverse`
      | `divide-opacity-${number}`
      | `border-collapse`
      | `border-separate`
      | `rounded`
      | `border-b`
      | `border-b-${number}`
      | `border-l`
      | `border-l-${number}`
      | `border-r`
      | `border-r-${number}`
      | `border-t`
      | `border-t-${number}`
      | `rounded-2xl`
      | `rounded-3xl`
      | `rounded-b-2xl`
      | `rounded-b-3xl`
      | `rounded-b-xl`
      | `rounded-bl-2xl`
      | `rounded-bl-3xl`
      | `rounded-bl-xl`
      | `rounded-br-2xl`
      | `rounded-br-3xl`
      | `rounded-br-xl`
      | `rounded-l-2xl`
      | `rounded-l-xl`
      | `rounded-r-2xl`
      | `rounded-r-3xl`
      | `rounded-r-xl`
      | `rounded-t-2xl`
      | `rounded-t-3xl`
      | `rounded-t-xl`
      | `rounded-tl-2xl`
      | `rounded-tl-3xl`
      | `rounded-tl-xl`
      | `rounded-tr-2xl`
      | `rounded-tr-3xl`
      | `rounded-tr-xl`
      | `rounded-xl`
      | `box-border`
      | `box-content`
      | `block`
      | `hidden`
      | `inline`
      | `inline-block`
      | `inline-flex`
      | `inline-grid`
      | `flex`
      | `grid`
      | `flow-root`
      | `divide-black`
      | `divide-blue-${number}`
      | `divide-current`
      | `divide-dashed`
      | `divide-dotted`
      | `divide-doubble`
      | `divide-green-${number}`
      | `divide-indigo-${number}`
      | `divide-none`
      | `divide-pink-${number}`
      | `divide-purple-${number}`
      | `divide-red-${number}`
      | `divide-solid`
      | `divide-transparent`
      | `divide-white`
      | `divide-y-reverse`
      | `divide-yellow-${number}`
      | `flex-row`
      | `flex-row-reverse`
      | `flex-col`
      | `flex-col-reverse`
      | `flex-initial`
      | `flex-${number}`
      | `flex-auto`
      | `flex-none`
      | `flex-no-wrap`
      | `flex-wrap`
      | `flex-wrap-reverse`
      | `items-stretch`
      | `content-start`
      | `justify-start`
      | `self-start`
      | `flex-grow`
      | `flex-shrink`
      | `order-${number}`
      | `content-around`
      | `content-between`
      | `content-center`
      | `content-end`
      | `content-evenly`
      | `contents`
      | `flex-nowrap`
      | `justify-items-auto`
      | `justify-items-center`
      | `justify-items-end`
      | `justify-items-start`
      | `justify-items-stretch`
      | `justify-self-auto`
      | `justify-self-center`
      | `justify-self-end`
      | `justify-self-start`
      | `justify-self-stretch`
      | `space-x-${number}`
      | `space-x-px`
      | `space-x-reverse`
      | `space-y-px`
      | `space-y-reverse`
      | `focus-within`
      | `from-black`
      | `col-auto`
      | `col-span-${number}`
      | `col-start-${number}`
      | `col-end-${number}`
      | `gap-${number}`
      | `row-gap-${number}`
      | `col-gap-${number}`
      | `grid-rows-${number}`
      | `grid-cols-${number}`
      | `grid-flow-row`
      | `grid-flow-row-dense`
      | `grid-flow-col`
      | `grid-flow-col-dense`
      | `row-span-${number}`
      | `row-start-auto`
      | `row-start-${number}`
      | `row-end-auto`
      | `row-end-${number}`
      | `auto-cols-auto`
      | `auto-cols-fr`
      | `auto-cols-max`
      | `auto-cols-min`
      | `auto-rows-auto`
      | `auto-rows-fr`
      | `auto-rows-max`
      | `auto-rows-min`
      | `col-end-auto`
      | `col-span-full`
      | `col-start-auto`
      | `gap-px`
      | `gap-x-${number}`
      | `gap-x-px`
      | `gap-y-${number}`
      | `gap-y-px`
      | `place-contant-around`
      | `place-contant-between`
      | `place-contant-center`
      | `place-contant-end`
      | `place-contant-evenly`
      | `place-contant-start`
      | `place-contant-stretch`
      | `place-items-auto`
      | `place-items-center`
      | `place-items-end`
      | `place-items-start`
      | `place-items-stretch`
      | `place-self-auto`
      | `place-self-end`
      | `place-self-start`
      | `place-self-stretch`
      | `row-auto`
      | `row-span-full`
      | `group-hover`
      | `h-${number}`
      | `h-auto`
      | `h-px`
      | `h-full`
      | `h-screen`
      | `max-h-full`
      | `max-h-screen`
      | `min-h-${number}`
      | `min-h-full`
      | `min-h-screen`
      | `max-h-px`
      | `list-disc`
      | `list-inside`
      | `m-${number}`
      | `m-auto`
      | `m-px`
      | `mb-${number}`
      | `mb-auto`
      | `mb-px`
      | `mr-${number}`
      | `mr-auto`
      | `mr-px`
      | `mt-${number}`
      | `mt-auto`
      | `mt-px`
      | `ml-${number}`
      | `ml-auto`
      | `ml-px`
      | `mx-${number}`
      | `mx-auto`
      | `mx-px`
      | `my-${number}`
      | `my-auto`
      | `my-px`
      | `-m-${number}`
      | `-m-px`
      | `-mb-${number}`
      | `-mb-px`
      | `-mr-${number}`
      | `-mr-px`
      | `-mt-${number}`
      | `-mt-px`
      | `-ml-${number}`
      | `-ml-px`
      | `-mx-${number}`
      | `-mx-px`
      | `-my-${number}`
      | `-my-px`
      | `lining-nums`
      | `normal-nums`
      | `oldstyle-nums`
      | `stacked-fractions`
      | `opacity-${number}`
      | `outline-black`
      | `outline-white`
      | `p-${number}`
      | `p-px`
      | `pb-${number}`
      | `pb-px`
      | `pr-${number}`
      | `pr-px`
      | `pt-${number}`
      | `pt-px`
      | `pl-${number}`
      | `pl-px`
      | `px-${number}`
      | `px-px`
      | `py-${number}`
      | `py-px`
      | `clear-left`
      | `clear-right`
      | `clear-both`
      | `clear-none`
      | `clearfix`
      | `inset-y-${number}`
      | `left-${number}`
      | `right-${number}`
      | `bottom-${number}`
      | `object-center`
      | `object-bottom`
      | `object-left`
      | `object-left-bottom`
      | `object-left-top`
      | `object-right`
      | `object-right-bottom`
      | `object-right-top`
      | `object-top`
      | `object-contain`
      | `z-${number}`
      | `static`
      | `relative`
      | `absolute`
      | `fixed`
      | `sticky`
      | `-bottom-${number}`
      | `-bottom-px`
      | `-inset-${number}`
      | `-inset-px`
      | `-inset-x-${number}`
      | `-inset-y-${number}`
      | `-inset-y-full`
      | `-inset-y-px`
      | `-left-${number}`
      | `-left-full`
      | `-left-px`
      | `-right-${number}`
      | `-right-full`
      | `-right-px`
      | `-rotate-${number}`
      | `-skew-x-${number}`
      | `-skew-y-${number}`
      | `-space-x-${number}`
      | `-space-x-px`
      | `-space-y-${number}`
      | `-space-y-px`
      | `-top-${number}`
      | `-top-px`
      | `-translate-x-${number}`
      | `-translate-x-full`
      | `-translate-x-px`
      | `-translate-y-${number}`
      | `-translate-y-px`
      | `align-baseline`
      | `align-bottom`
      | `align-middle`
      | `align-text-bottom`
      | `align-text-top`
      | `align-top`
      | `bottom-auto`
      | `bottom-full`
      | `bottom-px`
      | `inset-${number}`
      | `inset-full`
      | `inset-px`
      | `inset-x-${number}`
      | `inset-x-full`
      | `inset-x-px`
      | `inset-y-full`
      | `inset-y-px`
      | `left-full`
      | `left-px`
      | `right-auto`
      | `right-full`
      | `right-px`
      | `top-full`
      | `top-px`
      | `hover`
      | `focus`
      | `container`
      | `ring`
      | `ring-${number}`
      | `ring-black`
      | `ring-blue-${number}`
      | `ring-current`
      | `ring-gray-${number}`
      | `ring-green-${number}`
      | `ring-inding-${number}`
      | `ring-inset`
      | `ring-offset-${number}`
      | `ring-offset-black`
      | `ring-offset-blue-${number}`
      | `ring-offset-current`
      | `ring-offset-gray-${number}`
      | `ring-offset-green-${number}`
      | `ring-offset-indigo-${number}`
      | `ring-offset-pink-${number}`
      | `ring-offset-purple-${number}`
      | `ring-offset-red-${number}`
      | `ring-offset-transparent`
      | `ring-offset-white`
      | `ring-offset-yellow-${number}`
      | `ring-opacity-${number}`
      | `ring-pink-${number}`
      | `ring-purple-${number}`
      | `ring-red-${number}`
      | `ring-transparent`
      | `ring-white`
      | `ring-yellow-${number}`
      | `overscroll-contain`
      | `overscroll-x-auto`
      | `overscroll-x-contain`
      | `overscroll-x-none`
      | `overscroll-y-auto`
      | `overscroll-y-contain`
      | `overscroll-y-none`
      | `shadow-xs`
      | `shadow-sm`
      | `shadow`
      | `shadow-md`
      | `shadow-lg`
      | `shadow-xl`
      | `shadow-2xl`
      | `shadow-inner`
      | `shadow-outline`
      | `shadow-none`
      | `space-y-${number}`
      | `fill-current`
      | `stroke-current`
      | `stroke-${number}`
      | `table`
      | `table-caption`
      | `table-cell`
      | `table-column`
      | `table-column-group`
      | `table-footer-group`
      | `table-header-group`
      | `table-row-group`
      | `table-row`
      | `table-auto`
      | `antialiased`
      | `subpixel-antialiased`
      | `break-normal`
      | `break-words`
      | `break-all`
      | `truncate`
      | `uppercase`
      | `lowercase`
      | `capitalize`
      | `normal-case`
      | `leading-none`
      | `leading-tight`
      | `leading-snug`
      | `leading-normal`
      | `leading-relaxed`
      | `leading-loose`
      | `leading-${number}`
      | `underline`
      | `line-through`
      | `no-underline`
      | `font-hairline`
      | `font-thin`
      | `font-light`
      | `font-normal`
      | `font-medium`
      | `font-semibold`
      | `font-bold`
      | `font-extrabold`
      | `font-black`
      | `text-xs`
      | `text-sm`
      | `text-base`
      | `text-lg`
      | `text-xl`
      | `text-2xl`
      | `text-3xl`
      | `text-4xl`
      | `text-5xl`
      | `text-6xl`
      | `font-sans`
      | `font-serif`
      | `font-mono`
      | `text-left`
      | `text-center`
      | `text-right`
      | `text-justify`
      | `italic`
      | `not-italic`
      | `whitespace-normal`
      | `tracking-tighter`
      | `tracking-tight`
      | `tracking-normal`
      | `tracking-wide`
      | `tracking-wider`
      | `tracking-widest`
      | `text-transparent`
      | `text-current`
      | `text-black`
      | `text-white`
      | `text-gray-${number}`
      | `text-red-${number}`
      | `text-orange-${number}`
      | `text-yellow-${number}`
      | `text-green-${number}`
      | `text-teal-${number}`
      | `text-blue-${number}`
      | `text-indigo-${number}`
      | `text-purple-${number}`
      | `text-pink-${number}`
      | `text-opacity-${number}`
      | `transform`
      | `origin-center`
      | `translate-x-${number}`
      | `translate-x-px`
      | `translate-x-full`
      | `translate-y-${number}`
      | `translate-y-px`
      | `translate-y-full`
      | `-translate-y-full`
      | `scale-${number}`
      | `scale-x-${number}`
      | `scale-y-${number}`
      | `rotate-${number}`
      | `skew-x-${number}`
      | `skew-y-${number}`
      | `diagonal-fractions`
      | `transform-gpu`
      | `font-extralight`
      | `text-7xl`
      | `text-8xl`
      | `text-9xl`
      | `cursor-auto`
      | `cursor-default`
      | `cursor-move`
      | `cursor-pointer`
      | `cursor-text`
      | `cursor-wait`
      | `cursor-not-allowed`
      | `appearance-none`
      | `placeholder-opacity-${number}`
      | `outline-none`
      | `overflow-hidden`
      | `scrolling-touch`
      | `pointer-events-none`
      | `pointer-events-auto`
      | `resize`
      | `resize-none`
      | `resize-y`
      | `resize-x`
      | `select-none`
      | `select-text`
      | `select-all`
      | `select-auto`
      | `placeholder-blue-${number}`
      | `placeholder-current`
      | `placeholder-gray-${number}`
      | `placeholder-green-${number}`
      | `placeholder-indigo-${number}`
      | `placeholder-pink-${number}`
      | `placeholder-purple-${number}`
      | `placeholder-red-${number}`
      | `placeholder-transparent`
      | `placeholder-white`
      | `placeholder-yellow-${number}`
      | `visible`
      | `invisible`
      | `sr-only`
      | `w-${number}`
      | `w-auto`
      | `w-px`
      | `w-full`
      | `w-screen`
      | `max-w-xs`
      | `max-w-sm`
      | `max-w-md`
      | `max-w-lg`
      | `max-w-xl`
      | `max-w-2xl`
      | `max-w-3xl`
      | `max-w-4xl`
      | `max-w-5xl`
      | `max-w-6xl`
      | `max-w-full`
      | `max-w-screen-sm`
      | `max-w-screen-md`
      | `max-w-screen-lg`
      | `max-w-screen-xl`
      | `max-w-none`
      | `min-w-${number}`
      | `min-w-full`
      | `max-h-${number}`
      | `max-w-${number}`
      | `max-w-7xl`
      | `max-w-max`
      | `max-w-min`
      | `max-w-prose`
      | `max-w-screen-2xl`
      | `min-w-max`
      | `min-w-min`
;
