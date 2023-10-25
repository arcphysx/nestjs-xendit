import { Module, DynamicModule, Provider } from "@nestjs/common";
import { XenditConfig } from "./enum/xendit-config.enum";
import { XenditService } from "./xendit.service";
import { XenditModuleAsyncOptions, XenditModuleOptions, XenditModuleOptionsFactory } from "./interface/xendit-options.interface";
import { Xendit } from 'xendit-node';

@Module({
    providers: [
        XenditService,
    ],
    exports: [XenditService],
})
export class XenditModule {
    static register(options: XenditModuleOptions): DynamicModule {
        return {
            module: XenditModule,
            providers: [
                {
                    provide: XenditConfig.OPTIONS,
                    useValue: options,
                },
                {
                    provide: XenditConfig.INSTANCE,
                    useValue: new Xendit(options),
                },
            ],
        };
    }

    static registerAsync(options: XenditModuleAsyncOptions): DynamicModule {
        return {
            module: XenditModule,
            imports: options.imports,
            providers: [
                ...this.createAsyncProviders(options),
                {
                    provide: XenditConfig.INSTANCE,
                    useFactory: (options: XenditModuleOptions) => new Xendit(options),
                    inject: [XenditConfig.OPTIONS],
                },
            ],
        };
    }

    private static createAsyncProviders(
        options: XenditModuleAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }

    private static createAsyncOptionsProvider(
        options: XenditModuleAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: XenditConfig.OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: XenditConfig.OPTIONS,
            useFactory: async (optionsFactory: XenditModuleOptionsFactory) =>
                optionsFactory.createXenditOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
}