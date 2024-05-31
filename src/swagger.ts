import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestApplication } from '@nestjs/core';

export function setupSwagger(app: NestApplication) {
  const options = new DocumentBuilder()
    .setTitle('nest RBAC权限设计')
    .setDescription('教练，我想学RBAC权限啊！！！')
    .setVersion('1.0')
    // .addTag('啦啦啦')
    .setExternalDoc('ApiFox', 'http://localhost:3000/api/doc-json')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/doc', app, document);
}
