import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ArgumentOutOfRangeError } from 'rxjs';

export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(
      '🚀 ~ file: validation.pipe.ts:6 ~ ValidationPipe ~ transform ~ metadata:',
      metadata,
    );
    console.log(
      '🚀 ~ file: validation.pipe.ts:6 ~ ValidationPipe ~ transform ~ value:',
      value,
    );

    return value;
  }
}
