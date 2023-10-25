import { ModuleMetadata, Provider, Type } from '@nestjs/common';
import { XenditOpts } from "xendit-node";

export type XenditModuleOptions = XenditOpts

export interface XenditModuleOptionsFactory {
  createXenditOptions(): Promise<XenditModuleOptions> | XenditModuleOptions;
}

export interface XenditModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<XenditModuleOptionsFactory>;
  useClass?: Type<XenditModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<XenditModuleOptions> | XenditModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}