import { Layout } from './Layout'

export const PlayerSettings = () => {
  return (
    <Layout>
      <section className='pt-6 flex justify-between items-center pb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-txtGray'>Subtitles</h1>
      </section>

      <div className='flex flex-col gap-4'>
        <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg capitalize font-semibold'>Subtitle font</h2>
          <p className='text-sm text-txtGray/70 pt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae
            eaque officia eos nobis quidem esse modi temporibus error.
          </p>
        </section>
        <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg capitalize font-semibold'>
            Subtitle font size
          </h2>
          <p className='text-sm text-txtGray/70 pt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae
            eaque officia eos nobis quidem esse modi temporibus error.
          </p>
        </section>
        <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
          <h2 className='text-lg capitalize font-semibold'>
            Always active subtitle
          </h2>
          <p className='text-sm text-txtGray/70 pt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            voluptatibus pariatur consequuntur magnam odio architecto
            perspiciatis blanditiis fuga dolores optio labore reprehenderit
            possimus voluptates, laudantium quos deleniti fugiat, incidunt
            adipisci.
          </p>
        </section>

        <section className='pt-6 flex justify-between items-center'>
          <h1 className='text-2xl mb-0 font-semibold text-txtGray'>Language</h1>
        </section>

        <div className='flex flex-col gap-4'>
          <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
            <h2 className='text-lg capitalize font-semibold'>
              Preferred language subtitle
            </h2>
            <p className='text-sm text-txtGray/70 pt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus pariatur consequuntur magnam odio architecto
              perspiciatis blanditiis fuga dolores optio labore reprehenderit
              possimus voluptates, laudantium quos deleniti fugiat, incidunt
              adipisci.
            </p>
          </section>

          <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
            <h2 className='text-lg capitalize font-semibold'>
              Lorem ipsum dolor sit amet
            </h2>
            <p className='text-sm text-txtGray/70 pt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus pariatur consequuntur magnam odio architecto
              perspiciatis blanditiis fuga dolores optio labore reprehenderit
              possimus voluptates, laudantium quos deleniti fugiat, incidunt
              adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Amet voluptatibus pariatur consequuntur magnam odio architecto
              perspiciatis blanditiis fuga dolores optio labore reprehenderit
              possimus voluptates, laudantium quos deleniti fugiat, incidunt
              adipisci.
            </p>
          </section>

          <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
            <h2 className='text-lg capitalize font-semibold'>Sit amet</h2>
            <p className='text-sm text-txtGray/70 pt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus pariatur consequuntur magnam odio architecto
              perspiciatis blanditiis fuga dolores optio labore reprehenderit
              possimus voluptates, laudantium quos deleniti fugiat, incidunt
              adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Amet voluptatibus pariatur consequuntur magnam odio architecto
              perspiciatis blanditiis fuga dolores optio labore reprehenderit
              possimus voluptates, laudantium quos deleniti fugiat, incidunt
              adipisci.
            </p>
          </section>

          <section className='bg-sd/30 p-4 rounded-lg shadow-md'>
            <h2 className='text-lg capitalize font-semibold'>
              consectetur adipisicing elit
            </h2>
            <p className='text-sm text-txtGray/70 pt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatibus pariatur consequuntur magnam odio architecto
              perspiciatis blanditiis fuga dolores optio labore reprehenderit
              possimus voluptates, laudantium quos deleniti fugiat, incidunt
              adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Amet voluptatibus pariatur consequuntur magnam odio architecto
              perspiciatis blanditiis fuga dolores optio labore reprehenderit
              possimus voluptates, laudantium quos deleniti fugiat, incidunt
              adipisci.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
