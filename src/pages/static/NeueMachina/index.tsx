import localFont from 'next/font/local'

export const neuemachinaregular = localFont({
  src: [
    {
      path: './NeueMachina-Regular.otf',
      weight: '400'
    },
    {
      path: './NeueMachina-Regular.otf',
      weight: '700'
    } 
  ],
  variable: '--font-neue'
})

export const neuemachinabold = localFont({
  src: [
    {
      path: './NeueMachina-Ultrabold.otf',
      weight: '400'
    },
    {
      path: './NeueMachina-Ultrabold.otf',
      weight: '700'
    } 
  ],
  variable: '--font-neuebold'
})


export const neuemachinalight = localFont({
  src: [
    {
      path: './NeueMachina-Light.otf',
      weight: '400'
    },
    {
      path: './NeueMachina-Light.otf',
      weight: '700'
    } 
  ],
  variable: '--font-neuelight'
})


