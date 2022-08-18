import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { PrescriptionService } from 'src/prescription/prescription.service';

@Injectable()
export class PrescriptionCommand {
  constructor(private readonly prescriptionService: PrescriptionService) {
    console.log('yop');
  }

  @Command({
    command: 'prescription:sanitize',
    describe: 'sanitize prescription',
  })
  async sanitize() {
    console.log('yop');
    this.prescriptionService.sanitizeAll();
  }
}
