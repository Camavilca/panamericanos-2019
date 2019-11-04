FROM openjdk:8
EXPOSE 8080
ADD target/spring-boot-docker spring-boot-docker
ENTRYPOINT ["java","-jar","/spring-boot-docker"]