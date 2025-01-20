type CardSettingsProps = {
  title: string
}

export const CardSettings = ({ title }: CardSettingsProps) => {
  const information = [
    {
      id: 1,
      title: 'Preffered language subtitle',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus pariatur consequuntur magnam odio architecto perspiciatis blanditiis fuga dolores optio labore reprehenderit possimus voluptates, laudantium quos deleniti fugiat, incidunt adipisci.',
      action: 'Switch',
    },
    {
      id: 2,
      title: 'Subtitle font',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae eaque officia eos nobis quidem esse modi temporibus error.',
      action: 'Dropdown',
    },
    {
      id: 3,
      title: 'Subtitle font size',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae eaque officia eos nobis quidem esse modi temporibus error.',
    },
    {
      id: 4,
      title: 'Always active subtitle',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus pariatur consequuntur magnam odio architecto perspiciatis blanditiis fuga dolores optio labore reprehenderit possimus voluptates, laudantium quos deleniti fugiat, incidunt adipisci.',
    },
  ]

  return (
    <>
      <section className='pt-6 flex justify-between items-center mb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-txtGray'>{title}</h1>
      </section>

      <div className='flex flex-col gap-4'>
        {information.map(({ id, title, description, action }) => (
          <section
            className='bg-sd/30 p-4 rounded-lg shadow-md flex justify-between items-center gap-6'
            key={id}
          >
            <div>
              <h2 className='text-lg capitalize font-semibold'>{title}</h2>
              <p className='text-sm text-txtGray/70 pt-2'>{description}</p>
            </div>
            {action === 'Switch' && <p>Switch</p>}
            {action === 'Dropdown' && <p>Dropdown</p>}
          </section>
        ))}
      </div>
    </>
  )
}
