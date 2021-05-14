---
title: ""
date: 2020-11-11 18:13:00
---

## 可能会用到的 JavaScript 方法

### antd 中关于 Upload 组件的使用

**关于将图像转化为 base64 格式**

1. 首先需要一个将文件转换为 Base64 的方法

```
const coverBase64 = (file: File): Promise<string> => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (evt) => {
      resolve(evt.target?.result as string);
    }
    reader.readAsDataURL(file);
  })
};
```

2. 直接引用 Upload 组件

```
<Upload
  name="business"
  accept="image/png, image/jpeg"
  maxCount={1}
  beforeUpload={(file, fileList) => {
    coverBase64(file).then((base64: string) => {
      setUploadFileList(base64);
      form.setFieldsValue({
        business: base64,
      });
    });
    return false;
  }}
  onRemove={() => {
    setUploadFileList('');
  }}
>
  <Button type="primary" icon={<UploadOutlined />}>上传营业执照</Button>
</Upload>
```

3. 注意需要用 antd design 表单组件中的 API form.setFieldsValue 方法来更新字段值。

```
// 视情况考虑用状态来储存最新上传文件。
form.setFieldsValue({
  business: base64,
});
```
