# backend-pets-project

1. Главная ветка - main
2. Запрещено пушить сразу в main
3. Каждый пушит только в свою ветку !
4. Все свои ветки делаются из ветки MAIN
5. Перед каждым коммитом нужно стягивать возможно обновленные данные с
   репозитория git pull

---

1. Процесс работы: Клонируете себе на ком репозиторий: git clone
   https://github.com/DenisVoron/backend-pets-project.git
2. Создать и перейти в свою ветку git checkout -b "feature/название ветки"
3. Сохранить коммит git add . и gitcommit -m "название коммита"
4. Перейти в ветку main git checkout main Стянуть последние изменения git pull
5. Если нет конфликтов, выполнить пуш git push
6. После этого появится сообщение, что такой ветки не существует на Гит Хабе и
   предложат скопировать длинный код.
7. Копируете, вставляете и запускаете. Перейти на Гит Хаб и оформить Pull
   Request
8. Если нужно внести изменения, то из ветки MAIN создается ветка git checkout -b
   "fix/название ветки"

9. Команди: npm start — старт сервера в режимі production
10. npm run start:dev — старт сервера в режимі розробки (development)