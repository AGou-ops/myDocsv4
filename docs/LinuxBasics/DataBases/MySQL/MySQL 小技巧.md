# MySQL小技巧汇总

- JSON中查询特定键对应的值

```sql
SELECT data -> '$.text_1' FROM ...				-- `->`写法等价于JSON_EXTRACT()
-- `->>`是JSON_EXTRACT() 和 JSON_UNQUOTE() 的等价写法
```

:link:更多JSON操作参考：https://www.cnblogs.com/muscleape/p/10064031.html

- 将字符串转换为数字

```sql
SELECT CAST('123' AS SIGNED);
SELECT CONVERT('123',SIGNED);
-- 三种方法，最后这种非常简单
SELECT '123'+0;
```

- 重命名数据库
```bash
# 注意直接使用RENAME DATABASE <old_name> TO <new_name> 会丢失部分数据，官方也不推荐该做法，可以使用一下脚本代理，注意有一行警告输出。
mysql -h rm-8vbhaq1jlv38l7qey.mysql.zhangbei.rds.aliyuncs.com -u tmp -p"xxx" canal_test -sNe 'show tables' | while read table; do mysql -u tmp -p"xxx" -sNe "RENAME TABLE canal_test.$table TO canal_test_bak_20230901.$table"; done


for table in question_data question_data_delete source_data std_question_data std_question_data_delete user_table; do mysql -h rm-8vbhaq1jlv38l7qey.mysql.zhangbei.rds.aliyuncs.com -u tmp -p"xxx" -sNe "RENAME TABLE canal_test.$table TO canal_test_bak_20230901.$table"; done

```