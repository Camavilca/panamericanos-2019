FROM openjdk:8
EXPOSE 8080
ADD target/contactenos.jar contactenos.jar
ENTRYPOINT ["java","-jar","contactenos.jar"]