# backend-pets-project

1. Главная ветка - main
2. Запрещено пушить сразу в main
3. Каждый пушит только в свою ветку !
4. Все свои ветки делаются из ветки MAIN
5. Перед каждым коммитом нужно стягивать возможно обновленные данные с
   репозитория git pull

---

Процесс работы: Клонируете себе на ком репозиторий: git clone
https://github.com/DenisVoron/backend-pets-project.git Создать и перейти в свою
ветку git checkout -b "feature/название ветки" Сохранить коммит git add . и git
commit -m "название коммита" Перейти в ветку main git checkout main Стянуть
последние изменения git pull Если нет конфликтов, выполнить пуш git push После
этого появится сообщение, что такой ветки не существует на Гит Хабе и предложат
скопировать длинный код. Копируете, вставляете и запускаете. Перейти на Гит Хаб
и оформить Pull Request Если нужно внести изменения, то из ветки MAIN создается
ветка git checkout -b "fix/название ветки"

Команди: npm start — старт сервера в режимі production npm run start:dev — старт
сервера в режимі розробки (development)
