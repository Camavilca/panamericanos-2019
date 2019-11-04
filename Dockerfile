FROM openjdk:8
EXPOSE 8086
ADD target/contactenos.jar contactenos.jar
ENTRYPOINT ["java","-jar","contactenos.jar"]