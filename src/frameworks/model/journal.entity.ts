import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type JournalDocument = Journal & Document;

@Schema()
export class Journal {
  @Prop({ required: true })
  things_i_am_grateful_for: string;

  @Prop({ required: true })
  what_is_necessary_to_achieve_my_goals: string;

  @Prop({ required: true })
  monthly_goals: string;

  @Prop({ required: true })
  weekly_goals: string;

  @Prop({ required: true })
  advice_received_today_reflection_and_improvements: string;

  @Prop({ required: true })
  todo_list_for_tomorrow: string;

  @Prop({ required: true })
  things_to_be_mindful_of_tomorrow: string;

  @Prop({ required: true })
  evaluation_of_improvements_in_todays_actions: string;

  @Prop({ required: true })
  todays_mood_and_thoughts: string;
}

export const JournalSchema = SchemaFactory.createForClass(Journal);
