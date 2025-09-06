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
      component: 'Switch',
    },
    {
      id: 2,
      title: 'Subtitle font',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae eaque officia eos nobis quidem esse modi temporibus error.',
      component: 'Dropdown',
    },
    {
      id: 3,
      title: 'Subtitle font size',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae eaque officia eos nobis quidem esse modi temporibus error.',
      component: 'Input',
    },
    {
      id: 4,
      title: 'Always active subtitle',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus pariatur consequuntur magnam odio architecto perspiciatis blanditiis fuga dolores optio labore reprehenderit possimus voluptates, laudantium quos deleniti fugiat, incidunt adipisci.',
    },
  ]

  return (
    <>
      <section className='pt-6 flex justify-between items-center mb-4'>
        <h1 className='text-2xl mb-0 font-semibold text-zinc-300'>{title}</h1>
      </section>

      <div className='flex flex-col gap-4'>
        {information.map(({ id, title, description, component }) => (
          <section
            className='bg-sd/30 p-4 rounded-lg shadow-md flex justify-between items-center gap-6'
            key={id}
          >
            <div>
              <h2 className='text-lg capitalize font-semibold text-txtGray'>
                {title}
              </h2>
              <p className='text-sm text-txtGray/70 pt-2'>{description}</p>
            </div>
            <div>{renderComponent(component)}</div>
          </section>
        ))}
      </div>
    </>
  )
}

const renderComponent = (componentType?: string) => {
  switch (componentType) {
    case 'Switch':
      return <input type='checkbox' className='toggle-switch' />
    case 'Dropdown':
      return (
        <select className='dropdown'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </select>
      )
    case 'Button':
      return <button className='btn'>Click Me</button>
    case 'Input':
      return <input type='text' className='input' placeholder='Enter text' />
    default:
      return null
  }
}
