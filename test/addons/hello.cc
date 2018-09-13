NODE_MODULE(hello, init)//译者：将addon插件名hello和上述init函数关联输出

void Initialize (Handle<Object> exports);
NODE_MODULE(module_name, Initialize)