  // msw
  import { rest } from 'msw'
  import { setupServer } from 'msw/node'
  // см. ниже
  import { render, fireEvent, waitFor, screen } from '@testing-library/react'
  // см. ниже
  import '@testing-library/jest-dom'
  // компонент
  import FetchGreeting from '../src/FetchGreeting'
  test.todo('получение приветствия')

  
  const server = setupServer(
  rest.get('/greeting', (req, res, ctx) =>
    res(ctx.json({ greeting: 'Привет!' }))
  )
)

// запускаем сервер перед выполнением тестов
beforeAll(() => server.listen())
// сбрасываем обработчики к дефолтной реализации после каждого теста
afterEach(() => server.resetHandlers())
// останавливаем сервер после всех тестов
afterAll(() => server.close())
describe('получение приветствия', () => {
  // todo
})

test('-> успешное получение и отображение приветствия', async function () {
  // рендерим компонент
  // https://testing-library.com/docs/react-testing-library/api/#render
  render(<FetchGreeting url='/greeting' />)

  // имитируем нажатие кнопки для отправки запроса
  // https://testing-library.com/docs/dom-testing-library/api-events#fireevent
  //
  // screen привязывает (bind) запросы к document.body
  // https://testing-library.com/docs/queries/about/#screen
  fireEvent.click(screen.getByText('Получить приветствие'))

  // ждем рендеринга заголовка
  // https://testing-library.com/docs/dom-testing-library/api-async/#waitfor
  await waitFor(() => screen.getByRole('heading'))

  // текстом заголовка должно быть `Привет!`
  expect(screen.getByRole('heading')).toHaveTextContent('Привет!')
  // текстом кнопки должно быть `Готово`
  expect(screen.getByRole('button')).toHaveTextContent('Готово')
  // кнопка должна быть заблокированной
  expect(screen.getByRole('button')).toBeDisabled()
})
it('-> обработка ошибки сервера', async () => {
  // после этого сервер в ответ на запрос
  // будет возвращать ошибку со статус-кодом `500`
  server.use(rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))))

  // рендерим компонент
  render(<FetchGreeting url='greeting' />)

  // имитируем нажатие кнопки
  // рекомендуемый подход
  // https://testing-library.com/docs/user-event/setup
  const user = userEvent.setup()
  // если не указать `await`, тогда `Testing Library`
  // не успеет обернуть обновление состояния компонента
  // в `act` и мы получим предупреждение в терминале
  await user.click(screen.getByText('Получить приветствие'))

  // ждем рендеринга сообщения об ошибке
  await waitFor(() => screen.getByRole('alert'))

  // текстом сообщения об ошибке должно быть `Не удалось получить приветствие`
  expect(screen.getByRole('alert')).toHaveTextContent(
    'Не удалось получить приветствие'
  )
  // кнопка не должна быть заблокированной
  expect(screen.getByRole('button')).not.toBeDisabled()
})
