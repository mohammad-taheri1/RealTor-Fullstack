## Usefull packages in this project:

    prisma
    @prisma/client
    class-validator
    class-transformer
    bcryptjs
    @types/bcryptjs
    jsonwebtoken
    @types/jsonwebtoken

## Initialize Prisma on project

`npx prisma init`

## Migrate changes to DB

`npx prisma db push`

## Open Prisma Studio

`npx prisma studio`

## some Useful documents for Prisma

- [docs.nestjs.com/recipes/prisma](https://docs.nestjs.com/recipes/prisma)
- [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)
- [Prisma Client CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)

## used Esceptions

`custom`

- HttpException('Success message', 200);
- HttpException('Success message', HttpStatus.OK);
- HttpException('Custom message', 400);
- HttpException('Custom message', HttpStatus.BAD_REQUEST);

`standard`

- 401 -> UnauthorizedException()
- 403 -> ForbiddenException()
- 404 -> NotFoundException()
- 409 -> ConflictException()

## User types

- BUYER
- REALTOR
- ADMIN


## Database 

`General information`

- PostgreSQL as DB
- Prisma as ORM

`DB Models in this project`

- User
- Home
- Image
- Message
