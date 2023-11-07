import { Test, TestingModule } from '@nestjs/testing';
import { XenditService } from './xendit.service';
import { createMock } from '@golevelup/ts-jest';
import * as XND from 'xendit-node';

jest.mock('xendit-node', ()=> {
    return {
        Xendit : jest.fn().mockImplementation(() => { return {} })
    }
});

describe('XenditService', () => {
    let xenditService: XenditService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                XenditService,
                { provide: XenditService, useValue: createMock(XND.Xendit) }
            ],
        }).compile();

        xenditService = module.get<XenditService>(XenditService);
    });

    it('should be defined', () => {
        expect(xenditService).toBeDefined();
    });

    it('should fill xendit-related property', () => {
        let xendit = new XND.Xendit({secretKey: 'secret-key'})
        let service = new XenditService(xendit)
        expect(XND.Xendit).toHaveBeenCalledTimes(1)
    });
});
