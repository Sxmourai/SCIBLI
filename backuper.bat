
set p="C:/Workspace/SCIBLI/backups/backup-%date:~0,2%-%date:~3,2%-%date:~6,4% %TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%"
set s="C:/Workspace/SCIBLI/backups/backup-%date:~0,2%-%date:~3,2%-%date:~6,4% %TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%/server"
set w="C:/Workspace/SCIBLI/backups/backup-%date:~0,2%-%date:~3,2%-%date:~6,4% %TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%/www"
mkdir %p% %s% %w%
xcopy /E "app/server" %s%
xcopy /E "app/www" %w%