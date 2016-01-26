SimpleSchema.messages({
    required: "[label] - нужно заполнить",
    minString: "[label] должно состоять из [min] букв минимум",
    maxString: "Длина поля [label] не должна превышать [max] букв",
    minNumber: "[label] слишком маленькое, минимальное значение [min]",
    maxNumber: "[label] слишком большое, максимальное значение [max]",
    minDate: "[label] значение поля должно равняться или быть после [min]",
    maxDate: "[label] значение не может превышать [max]",
    badDate: "[label] не допустимая дата",
    minCount: "Вы должны указать минимум [minCount] значений",
    maxCount: "Вы не можете указать меньше [maxCount] значений",
    noDecimal: "[label] - поле должно быть целочисленным",
    notAllowed: "[value] содержит недопустимое значение",
    expectedString: "[label] значение поля должно быть строкой",
    expectedNumber: "[label] значение поля должно быть числом",
    expectedBoolean: "[label] значение поля может быть только да и нет",
    expectedArray: "[label] поле должно быть массивом",
    expectedObject: "[label] должно быть объектом",
    expectedConstructor: "[label] должно быть типа [type]",
    regEx: [
        {msg: "[label] ошибка в валидации регулярными выражениями"},
        {
            exp: SimpleSchema.RegEx.Email,
            msg: "[label] должно быть реальным e-mail адресом"
        },
        {
            exp: SimpleSchema.RegEx.WeakEmail,
            msg: "[label] должно быть реальным e-mail адресом"
        },
        {
            exp: SimpleSchema.RegEx.Domain,
            msg: "[label] должно быть реальным адресом сайта"
        },
        {
            exp: SimpleSchema.RegEx.WeakDomain,
            msg: "[label] должно быть реальным e-mail доменом"
        },
        {
            exp: SimpleSchema.RegEx.IP,
            msg: "[label] должно быть реальным IPv4 или IPv6 адресом"
        },
        {
            exp: SimpleSchema.RegEx.IPv4,
            msg: "[label] должно быть реальным IPv4 адресом"
        },
        {
            exp: SimpleSchema.RegEx.IPv6,
            msg: "[label] должно быть реальным IPv6 адресом"
        },
        {
            exp: SimpleSchema.RegEx.Url,
            msg: "[label] должно быть реальным адресом сайта"
        },
        {
            exp: SimpleSchema.RegEx.Id,
            msg: "[label] должно быть реальным буквенно-числовым идентификатором"
        }
    ],
    keyNotInSchema: "[key] -ключ не доступен в схеме"
});