const { success_messages } = require("../constants/messages");

class ResponseListDto {

  constructor(total_count = 0, success = true, items = []) {
    this.total_count = total_count;
    this.success = success;
    this.items = items
  }
}

class ResponseMessageDto {
  constructor(success = true, message = success_messages.success) {
    this.success = success
    this.message = message
  }
}

class ResponseDetailDto extends ResponseMessageDto {
  constructor(success = true, message = success_messages.success, data=null) {
    super(success, message)
    this.data = data
  }
}

module.exports = { ResponseDetailDto,ResponseListDto,ResponseMessageDto }