include "testing.file.thrift"

struct IncludeFileWithDot {
  1: required testing.file.Node node=NodeEnum2.UNKNOW
}